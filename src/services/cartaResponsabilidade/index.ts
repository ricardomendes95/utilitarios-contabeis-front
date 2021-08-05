import { GetCartaResponsabilidadeResponse } from './types'
import api from '../api'
import { AxiosRequestConfig } from 'axios'

export function getAll() {
  return api.get<GetCartaResponsabilidadeResponse>('/relatorios/')
}
