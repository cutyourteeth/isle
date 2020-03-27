import axios, { AxiosResponse } from 'axios';

export interface RecordData {
    [propName: string]: { timestamp: string; value: string };
}

interface BaseDataQueryDto {
    id: number;
    record: RecordData;
    createAt?: string;
    updateAt?: string;
    deleteAt?: string;
}
export interface EstateDataDto extends BaseDataQueryDto {}
export interface PriceDataDto extends BaseDataQueryDto {}

export interface HeartbeatDto {
    message: string;
    route: string;
}

/**
 * 用于调用服务端接口
 * @export
 */
export default class ServerApi {
    // public static serverUrl = 'https://caperal.cn:3141';
    public static serverUrl = 'http://localhost:3141';

    public static async getListData<T = AxiosResponse<BaseDataQueryDto[]>>(api: string, name?: string) {
        let destination = name ? `${api}/${name}` : `${api}`;
        const result = await axios.get<T>(`${this.serverUrl}/${destination}`);
        return result;
    }

    public static async sendHeartbeat<T = AxiosResponse<any[]>>(api: string, payload: any) {
        const result = await axios.post<T>(`${this.serverUrl}/${api}`, payload);
        return result;
    }
}
