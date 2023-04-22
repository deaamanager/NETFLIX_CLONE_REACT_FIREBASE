import React,{useEffect,useState} from 'react';
import db from '../firebase';
import './PlansScreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';


function PlansScreen() {
     
const [products, setProducts] = useState([]);
  
    useEffect(() => {
        db.collection('products')
        .where('active', '==', true)
        .get()
        .then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }   
                })
            })
            setProducts(products);
        })
    }, [])
   
     {/**
     
         const  user = useSelector(selectUser);
     const loadCheckout = async (priceId) => {
       
    
    
    
    
        const docRef = await db
            .collection('customers')
            .doc(user.uid)
            .collection('checkout_sessions')
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });

            docRef.onSnapshot(async (snap) => {
                const { error, sessionId } = snap.data();

                if (error) {
                    alert(`An error occured: ${error.message}`);
                }

                if (sessionId) {
                    const stripe = await loadStripe( 
                        //public key from stripe
                    );

                    stripe.redirectToCheckout({ sessionId });
                }
            });
     
    }   
*/}

////onClick={()=> loadCheckout(productData.price.priceId)}

  return (
    <div className='plansScreen'>
        {Object.entries(products).map(([productId, productData]) => {
            return (
                <div key={productId}
                className="plansScreen__plan">
                    <div className="plansScreen__info">
                         <h5>{productData.name}</h5>
                        <h6>{productData.description }</h6>
                        </div>
                        <button >Subscribe</button>
                        </div>
            )
        })}

    </div>
  )
}

export default PlansScreen