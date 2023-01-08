import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader,IonIcon,IonInput,IonItem,IonLabel,IonProgressBar, IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useState,useRef } from 'react';
import {calculatorOutline,refreshOutline} from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const [result,setResult] = useState<number>();

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const handleCalculate=()=>{
    const weight = weightInputRef.current!.value;
    const height = heightInputRef.current!.value;

    if(!weight||!height){
      return;
    }

    const bmi = +weight/(+height*+height);
    // console.log(bmi);
    setResult(bmi);
  }
  const handleReset=()=>{
    weightInputRef.current!.value='';
    heightInputRef.current!.value='';
    setResult(0);
  }

  return (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className='ion-padding'>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position='floating'>Height</IonLabel>
              <IonInput ref={heightInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position='floating'>Weight</IonLabel>
              <IonInput ref={weightInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className='ion-text-center'>
            <IonButton onClick={handleCalculate}>
              <IonIcon slot='start' icon={calculatorOutline}/>
              Calculate
            </IonButton>
          </IonCol>
          <IonCol className='ion-text-center'>
            <IonButton onClick={handleReset}>
              <IonIcon slot='start' icon={refreshOutline}/>
              Reset
            </IonButton>
          </IonCol>
        </IonRow>
        {result&&
        <IonRow>
          <IonCol className='ion-text-center ion-padding-top'>
            <IonCard className='ion-padding-vertical'>
              BMI : {result}
            </IonCard>
          </IonCol>
        </IonRow>
        }
      </IonGrid>
    </IonContent>
  </IonApp>
)};

export default App;
