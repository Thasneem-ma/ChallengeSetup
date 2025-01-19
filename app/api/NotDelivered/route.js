import {connectToDB} from '../../../libs/utils'
import Challenger from '../../../models/challenger';
import {NextResponse} from 'next/server';

await connectToDB();


export async function GET(){
    try {
        const data = await Challenger.find({Delivered: false});

        return NextResponse.json(data, {status: 200});
    } catch (error) {
        console.error('Failed to fetch data',error);
        return NextResponse.json({message: 'Failed to fetch data', status: 502});
    }
}

