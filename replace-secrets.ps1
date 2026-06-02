
# This script replaces hardcoded secrets with environment variable references in the specified files
$firebasePath = "front-end/src/firebase.js"
$contactPath = "front-end/src/pages/contact/Contact.jsx"

if (Test-Path $firebasePath) {
    $firebaseContent = Get-Content $firebasePath -Raw
    
    # Replace Firebase config with env vars
    $firebaseContent = $firebaseContent -replace 'apiKey:\s*"[^"]*"', 'apiKey: process.env.REACT_APP_FIREBASE_API_KEY'
    $firebaseContent = $firebaseContent -replace 'authDomain:\s*"[^"]*"', 'authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN'
    $firebaseContent = $firebaseContent -replace 'projectId:\s*"[^"]*"', 'projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID'
    $firebaseContent = $firebaseContent -replace 'storageBucket:\s*"[^"]*"', 'storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET'
    $firebaseContent = $firebaseContent -replace 'messagingSenderId:\s*"[^"]*"', 'messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID'
    $firebaseContent = $firebaseContent -replace 'appId:\s*"[^"]*"', 'appId: process.env.REACT_APP_FIREBASE_APP_ID'
    $firebaseContent = $firebaseContent -replace 'measurementId:\s*"[^"]*"', 'measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID'
    
    Set-Content -Path $firebasePath -Value $firebaseContent -NoNewline
}

if (Test-Path $contactPath) {
    $contactContent = Get-Content $contactPath -Raw
    
    # Replace EmailJS config with env vars
    $contactContent = $contactContent -replace "'service_[^']*'", 'process.env.REACT_APP_EMAILJS_SERVICE_ID'
    $contactContent = $contactContent -replace "'template_[^']*'", 'process.env.REACT_APP_EMAILJS_TEMPLATE_ID'
    $contactContent = $contactContent -replace "'[A-Za-z0-9]{17}'", 'process.env.REACT_APP_EMAILJS_PUBLIC_KEY'
    
    Set-Content -Path $contactPath -Value $contactContent -NoNewline
}
