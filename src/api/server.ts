const token = '2fbd08e6e089e1bf02a20e3f61cdaab72da8370bae432c5a'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phonebook-inuq.onrender.com/api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://phonebook-inuq.onrender.com/api/contacts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://phonebook-inuq.onrender.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            throw new Error('Failed to update data on server.')
        }
        
    },
    delete: async(id:string) => {
        const response = await fetch(`https://phonebook-inuq.onrender.com/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}