import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'travel.app',
  appName: 'travel-app',
  webDir: 'www',
  server: {
    androidScheme: 'https' 
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
