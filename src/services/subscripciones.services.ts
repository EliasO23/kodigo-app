import { ISubscripcion } from '../shared/interfaces/subscripcion.interface'

export const createSubscripcion = async (subscripcion: ISubscripcion) =>{
    try {
        const response = await fetch('https://edvaynvebgyfksgfvvdc.supabase.co/rest/v1/subscripciones',{
            method: 'POST',
            headers: {'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkdmF5bnZlYmd5ZmtzZ2Z2dmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MDQ2ODEsImV4cCI6MjA0NjE4MDY4MX0.rOotWtvdRKoKUCO17dUW6k9rS3wrYBATTxocZg9zFNc',
                'Content-Type': 'application/json',
                'Authorization':'hZE7VjngyaXpinG6mN/DmAhq7ZkOxtYwFO9bhpUhKbTanXIN5njzliSaHWD8uBZl2QnEu4xLeMfK6EwJEYVI+Q=='

            }, 
            body: JSON.stringify(subscripcion)
            
        })

        console.log("Respuesta completa del servidor:", response);
        
        
        
    } catch (error) {
        throw error
        
    }


}