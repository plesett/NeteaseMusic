import { service } from '@/utiles/request'

export async function GetIndex() {
    return await service.get('/api/users')
}