import { BaseService } from './BaseService';
import { IIO } from '../common/IIO';
export class EndpointService extends BaseService {

	getEndpoints(params: object = {}): Promise<[IIO]> {
		return this.get<[IIO]>(`${this.baseApi}endpoints${this.objectToParam(params)}`);
	}

	updateEndpoint(io: { id: string, [propName: string]: any }): Promise<IIO> {
		return this.put<IIO>(`${this.baseApi}endpoints/${io.id}`, io);
	}

	switchEndpoint(io: { id: string, [propName: string]: any }): Promise<IIO> {
		return this.post<IIO>(`${this.baseApi}endpoints/${io.id}/switch`, io);
	}
}
