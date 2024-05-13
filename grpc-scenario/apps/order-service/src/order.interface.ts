import { Observable } from 'rxjs';

export interface IGrpcOrder {
  checkStock(input: ICheckStockInput): Observable<ICheckStockOutput>;
  updateStock(input: IUpdateStockInput): Observable<IUpdateStockInput>;
}

export interface ICheckStockInput {
  productId: number;
}

export interface ICheckStockOutput {
  quantity: number;
}

export interface IUpdateStockInput {
  productId: number;
  quantity: number;
}
