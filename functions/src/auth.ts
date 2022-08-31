import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const service = require('../service-account.json')

admin.initializeApp(
    {
        credential: admin.credential.cert(service)
    }
)

const db = admin.firestore()

export const createUserRecord = functions.auth
    .user()
    .onCreate((user, context)=>{
        const userRef = db.doc(`users/${user.uid}`)

        return userRef.set({
            email: user.email,
            hintsBought: 0,
            rightGuesses: 0,
            team: 'red',
            totalGuesses: 0,
            username: '',
            wallet: ''
        })
    })