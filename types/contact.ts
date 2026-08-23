export type ContactFormData = {
  name: string;
  email: string;
  service: string;
  budget?: string;
  message: string;
};

export type ContactApiResponse = {
  success: boolean;
  message: string;
};
