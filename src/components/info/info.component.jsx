import { useState, useRef } from 'react';
import { Header, InfoContainer, Paragraph } from './info.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
export const InfoComponent = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768 ? true : false);
  const myRef = useRef(null);
  const triggerParagraph = () => {
    setIsOpen(!isOpen);
  };
  return (
    <InfoContainer>
      <Header ref={myRef}>Siamo il Bar giusto da colazione fino a cena.</Header>
      {/* <Paragraph style={{ display: isOpen ? 'block' : 'none' }}> */}
      <Paragraph>
        {isOpen
          ? `L’Etoile nasce nel 2016 dal sogno di Francesco Stella, volenteroso di
        dar vita a un locale nuovo e per niente scontato. Un ambiente
        accogliente, allegro e gioviale, con personale gentile e sempre
        disponibile ad esaudire ogni vostra richiesta. Tutti i giorni... offre
        colazioni indimenticabili dove potrai accompagnare al tuo caffè o al tuo
        cappuccino dei cornetti caldi e brioches per tutti i gusti. È inoltre un
        luogo di ritrovo ideale pronto ad accogliervi durante le pause della
        vostra giornata. La passione per il proprio lavoro fa sì che l’Etoile
        abbia affinato la sua produzione di tantissime varietà di dolci al
        cucchiaio e torte artigianali, compresi i buonissimi gelati dai gusti
        che sapranno deliziarvi e sorprendervi. Molto interessante è la proposta
        degli aperitivi e degli apericena, l’Etoile vi sorprenderà con una ricca
        lista di vini locali e cocktails davvero originali, con sempre nuove
        proposte rivisitate con ingredienti rigorosamente home made, il tutto
        accompagnato da abbondanti taglieri di qualità e rigorosamente di
        produzione artigianale. L'utilizzo sapiente di ingredienti di prima
        scelta è in grado di trasmettere un gusto unico e di una bontà genuina e
        senza eguali.`
          : `L’Etoile nasce nel 2016 dal sogno di Francesco Stella, volenteroso di
        dar vita a un locale nuovo e per niente scontato. Un ambiente
        accogliente, allegro e gioviale, con personale gentile e sempre
        disponibile ad esaudire ogni vostra richiesta. Tutti i giorni... `}
      </Paragraph>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={triggerParagraph}>
        {!isOpen ? 'scopri di piú' : 'riduci'}
      </Button>
    </InfoContainer>
  );
};

export default InfoComponent;
