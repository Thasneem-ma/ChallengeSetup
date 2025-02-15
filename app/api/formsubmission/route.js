import {connectToDB} from '../../../libs/utils'
import Challenger from '../../../models/challenger';
import {NextResponse} from 'next/server';

await connectToDB();

export  async function POST (request){

    try {
    const {name,mobile,whatsapp,address,kg} = await request.json();
    if(!name || !mobile || !address || !kg){
        return NextResponse.json({message: 'Invalid input'}, {status: 400})
    }

    const OldChallenger = await Challenger.findOne({mobile});

    if (OldChallenger) {
        await Challenger.updateOne({mobile}, {name,whatsapp,address,kg});
        return NextResponse.json({message: 'Successfully updated to db', status: 201});
    }

    await Challenger.create({name,mobile,whatsapp,address,kg});

    return NextResponse.json({message: 'Successfully uploaded to db', status: 201})

    } catch (error) {
        console.error('Failed to upload to db',error);
        return NextResponse.json({message: 'Failed to upload to db', status: 502})
    }

}


export async function GET(){
    try {
        const data = await Challenger.find().sort({ timeStamp: -1 });
        return NextResponse.json(data, {status: 200});
    } catch (error) {
        console.error('Failed to fetch data',error);
        return NextResponse.json({message: 'Failed to fetch data', status: 502});
    }
}

export async function PUT(request){
    try {
        const {_id,paid,Delivered,kg} = await request.json();
        if(!_id){
            return NextResponse.json({message: 'Invalid input'}, {status: 400})
        }

        await Challenger.updateOne({_id}, {paid, Delivered,kg});
        return NextResponse.json({message: 'Successfully updated the db', status: 200});

    } catch (error) {
        console.error('Failed to update the db',error);
        return NextResponse.json({message: 'Failed to update the db', status: 502});
    }
}