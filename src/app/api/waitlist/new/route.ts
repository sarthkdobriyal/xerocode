import db from '@/utils/db'

import { FormValidator } from '@/validations/formValidations'
import waitlist from '@/models/formModel'

export const POST = async (req: Request, res: Response) => {

    try{
        await db();
        const rawFormData = await req.json()
        const formData = FormValidator.parse(rawFormData)
        const newWaitlistEntry = new waitlist(formData)
        await newWaitlistEntry.save()

        return new Response('OK' , {status: 200})

    }catch(e){
        console.log(e)
        return new Response('Failed to add you to the waitlist', {status: 500})
    }
}

