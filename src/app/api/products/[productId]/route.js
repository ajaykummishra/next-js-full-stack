import { connection } from "@/lib/connection";
import { Product } from "@/lib/model/product";

import mongoose from "mongoose";
import {
    NextResponse
} from "next/server";

export async function GET(request, req) {
    const productId = req.params.productId

    let data = [];
    let message = '';
    let success = true;
    let errorMessage = '';
    try {
        await mongoose.connect(connection);
        // data = await Product.find({ _id: productId });
        data = await Product.findById({
            _id: productId
        });
        await mongoose.connection.close();

    } catch (error) {
        success = false
        errorMessage = error.message;
    }
    const response = {
        success: success,
        data: data,
        message: message,
        error: errorMessage
    };

    const statusCode = data.length == 0 ? 404 : 200
    if (statusCode == 404) {
        return NextResponse.json({
            result: data,
            message: "Not Data Found",
            success: success,
            error: errorMessage
        }, {
            status: 404
        });
    } else {
        return NextResponse.json({
            result: data,
            message: "",
            success: true,
            error: ""
        }, {
            status: 200
        });
    }

}

export async function PUT(request, req) {
    let payload = await request.json()
    let errorMessage = ""

    const productId = req.params.productId

    try {
        await mongoose.connect(connection);
        // let data = await Product.find({ _id: productId });

        let data = await Product.findOneAndUpdate({
            _id: productId
        }, payload, {
            new: true
        });
        await mongoose.connection.close();
        if (!data) {
            return NextResponse.json({
                result: [],
                message: "No data found",
                success: false,
                error: "No data found"
            }, {
                status: 404
            });
        }


        return NextResponse.json({
            result: data,
            message: "",
            success: true,
            error: ""
        }, {
            status: 200
        });

    } catch (error) {
        errorMessage = error.message;
        return NextResponse.json({
            result: [],
            message: errorMessage,
            success: false,
            error: errorMessage
        }, {
            status: 404
        });
    }
}

export async function DELETE(request, req){
    let errorMessage = ""

    const productId = req.params.productId

    try {
        await mongoose.connect(connection);
        // let data = await Product.find({ _id: productId });
        const data = await Product.deleteOne({_id:productId});

        console.log(data.deletedCount);

        await mongoose.connection.close();
        if (!data || data.deletedCount != 1) {
            return NextResponse.json({
                result: [],
                message: "Product not found",
                success: false,
                error: "Product not found"
            }, {
                status: 404
            });
        }

        return NextResponse.json({
            result: data,
            message: "Product deleted successfully",
            success: true,
            error: ""
        }, {
            status: 200
        });

    } catch (error) {
        errorMessage = error.message;
        return NextResponse.json({
            result: [],
            message: errorMessage,
            success: false,
            error: errorMessage
        }, {
            status: 500
        });
    }
}