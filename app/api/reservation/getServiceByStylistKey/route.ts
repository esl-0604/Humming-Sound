import { connectDB } from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

interface ServiceProps {
  service_id: string;
  product_id: string;
  stylist_id: string;
  price: number;
}

export async function GET(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const searchParams = req.nextUrl.searchParams;
  const stylist_key = searchParams.get(`stylist_key`) || null;

  const getStylistIdByStylistKey = async (stylist_key: string) => {
    const stylistIdByStylistKeyResponse = await db
      .collection("Stylist")
      .findOne({ stylist_key: stylist_key });
    if (!stylistIdByStylistKeyResponse)
      return NextResponse.json(
        { error: `Stylist not found for ${stylist_key}` },
        { status: 404 },
      );

    const stylist_id = String(stylistIdByStylistKeyResponse._id);
    return getServiceByStylistId(stylist_id);
  };

  const getServiceByStylistId = async (stylist_id: string) => {
    const serviceByStylistIdResponse = await db
      .collection("Service")
      .find({ stylist_id: stylist_id })
      .toArray();

    const services: ServiceProps[] = serviceByStylistIdResponse.map(
      (service) => ({
        service_id: String(service._id),
        product_id: service.product_id,
        stylist_id: service.stylist_id,
        price: service.price,
      }),
    );

    if (!serviceByStylistIdResponse)
      return NextResponse.json(
        { error: `Service not found for ${stylist_key}` },
        { status: 404 },
      );

    return getProductByProductId(services);
  };

  const getProductByProductId = async (services: ServiceProps[]) => {
    const serviceResponses = await Promise.all(
      services.map(async (service: ServiceProps) => {
        const product_id = service.product_id;
        const productByProductIdResponse = await db
          .collection("Product")
          .findOne({ _id: new ObjectId(product_id) });
        if (!productByProductIdResponse) {
          return NextResponse.json(
            { error: "Product not found" },
            { status: 404 },
          );
        }
        return {
          service_id: service.service_id,
          stylist_id: service.stylist_id,
          product: {
            title: productByProductIdResponse.title,
            memo: productByProductIdResponse.memo,
            type: productByProductIdResponse.type,
            cost_type: productByProductIdResponse.cost_type,
            order: Number(productByProductIdResponse.order),
          },
          price: service.price,
        };
      }),
    );
    return serviceResponses;
  };
  if (stylist_key === null) {
    return NextResponse.json(
      { error: "stylist_key is required" },
      { status: 400 },
    );
  }

  const result = await getStylistIdByStylistKey(stylist_key);
  return NextResponse.json(result, { status: 200 });
}
