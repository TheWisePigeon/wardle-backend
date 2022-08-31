import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp()

const db = admin.firestore()

export const createUserRecord = functions.auth
    .user()
    .onCreate((user, userContext)=>{
        const userRef = db.doc(`users/${user.uid}`)
        
        return userRef.set({
            email: user.email,
            hintsBought: 0,
            rightGuesses: 0,
            team: 'red',
            totalGuesses: 0,
            username: '',
            wallet: '',
        })
    })


export const login = functions.https.onRequest((req, res)=>{
    
})