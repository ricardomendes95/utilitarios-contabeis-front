import { GetCartaResponsabilidadeResponse } from './types'
import api from '../api'
import { AxiosRequestConfig } from 'axios'
import Definitions from '../../core/types'

export function generate(form: Definitions['CartaResponsabilidade']) {
  return api.post<Definitions['CartaResponsabilidade']>(
    '/reports/responsibilityLetter',
    form
  )
}

export function getCompany(id: string) {
  return api.get<Definitions['CompanyResponsabilityLatter']>(
    '/reports/companyResponsibilityLetter/' + id
  )
}
export function getPDf() {
  return api.get('/reports/pdf')
}

export function chama() {
  return api.get('/reports/local')
}
