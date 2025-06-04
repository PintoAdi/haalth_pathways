
export interface SurveyResponse {
  id: number;
  name: string;
  address: string;
  mobile: string;
  aadhar: string;
  modernHealthcare: boolean;
  traditionalHealthcare: boolean;
  dependsOnSituation: boolean;
}

export interface HealthcareStats {
  modern: number;
  traditional: number;
  depends: number;
  total: number;
}
