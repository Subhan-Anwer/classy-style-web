import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    // Try multiple methods to get the service account
    let serviceAccount;
    
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      // Method 1: From environment variable JSON string
      let serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
      
      // Handle escaped newlines
      if (serviceAccountString.includes('\\n')) {
        serviceAccountString = serviceAccountString.replace(/\\n/g, '\n');
      }
      
      serviceAccount = JSON.parse(serviceAccountString);
    } else if (
      process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_PRIVATE_KEY &&
      process.env.FIREBASE_CLIENT_EMAIL
    ) {
      // Method 2: From individual environment variables
      serviceAccount = {
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      };
    } else {
      throw new Error("Firebase service account configuration not found. Please set FIREBASE_SERVICE_ACCOUNT_KEY or individual environment variables.");
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    
    console.log("Firebase Admin SDK initialized successfully");
  } catch (error) {
    console.error("Firebase Admin SDK Initialization Error:", error);
    
    // In development, we can continue without Firebase Admin
    if (process.env.NODE_ENV !== 'production') {
      console.warn("Continuing without Firebase Admin in development mode");
    } else {
      throw error;
    }
  }
}

export const authAdmin = admin.auth();
