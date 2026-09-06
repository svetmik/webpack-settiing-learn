declare module "*.css";
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {

  NODE_ENV: 'development' | 'production';
  // API_URL: string;
  [key: string]: any; // Позволяет обращаться к любым другим переменным
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
