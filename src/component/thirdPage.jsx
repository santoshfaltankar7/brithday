import 'bootstrap/dist/css/bootstrap.css';
import thirdPageCss from './thirdPage.module.css'
import img1 from './img1.jpg'
import imgg1 from './imgg1.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img11 from './img11.jpg'
import img13 from './rakhi1.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img15 from './img15.jpg'
import imgg2 from './imgg2.jpg'

const cardData = [
  {
    id: 1,
    image: imgg1,
    title: 'Once Again Happy Birthday Bhava',
    text: 'Thanks Bhava etkya sagdya memories sathi tuzya sobat che pal means😍💕......!!\n Mala tuzya sobat time spend krala khup aavdte na he tr tula mahit aahe na!!! tech pal thode ajun ekta aathvn kru...❤️\n tuza birthday aahe na tr thods kahi tri special tuzya sathi....dusar tr mi kahi nhi kru sakat\n ha photo gauri chya birthday cha aahe ...mala ha aapla photo khup aavdte😍 mi khup chhan disat aahe na 😘',
    imageFirst: true // Image appears first for this card
  },
  {
    id: 2,
    image: img1,
    title: 'Our first click together.',
    text: 'Bhava mala as vatate ha apla first selfiee😍jyat apn doghch aahe⚫ ... \n Bhava mala aplya doghacha ajun ek photo pahije jyat tuzi age 100 aani mazi 80 rhnar 😉....mahit aahe mala mi mothi aahe tuzya pekha ...bhava aapn 100 che hoiii parent sobat rhu kon ks disanar pahale ... haaaa fkt mala ragavach nhi trch mi 100 chi zalya vr pn tula odakhanar....nhit cancel deal....ani ha aata fkt dialogue nhi maracha"deal krana hi kon chahata he" ',
    imageFirst: false 
  },
  {
    id: 3,
    image: img4,
    title: 'Support System',
    text: 'Thanks Bhava mala nehami support kra sathi ...I konw its your farz\n   mala khup aavdte bhava tuz he nature🥰mi khup lucky samjte swatala ki tu maza bhau 😊aahe aani tu mazya sobat aahe❤️ ...(hawet nhi udach) mala ch nhi bhava khup girls la tuz hech nature aavdte mhanun tu chumbak banun basala aahe... 😏',
    imageFirst: true 
  },
  {
    id: 4,
    image: img5,
    title: 'Best Moment',
    text: 'Mi Kadhich nhi visarnar he Memories aplya memory madhale ....thankuuuu😘LOVE YOU BHAVA \n I don`t need to say anything for that',
    imageFirst: false 
  },
  {
    id: 5,
    image: img6,
    title: 'Life TIme',
    text: 'Bhava aapn life chya har mod vr ek Dusarya sobat rahu...mg apli life kiti pn busy aso aapn tri ek dusarya sathi thodasa time kadat jau ....\n kahi pn problem asle tri ek dusarya la nhi sodu \n Promise na Bhava😊...\n ',
    imageFirst: true
  },
  {
    id: 6,
    image: img8,
    title: 'Blessing',
    text: 'Mala tula magachi tr grj nhi nehami tuzi blessing mazya sobat tach rahnar ...\n tu jya shiddat n mala support krto protect krto I knows tuza aashirwad pn nehami mazya sobat tach rhnar aahe\n Bhava tu pn nehami Happy rhat jaaa jasa aata aahe 🥰mala pn  nehami tula Happy,life enjoy krat aani Successful pahach aahe \n ',
    imageFirst: false 
  },
  {
    id: 7,
    image: img9,
    title: 'Thanks A Lot',
    text: 'Mi mazya life madhe kadhi expect nhot kel tu tya peksha kahi jast maze dream purn kel kharach bhava mi khup Lucky  ki tu mazya life madhe aahe \n tu mazya sathi kahi pn krto na 🤭 mi fkt todatun kadal tr tu te purn krto... \n Bhava...😒 mala pn vatate tula eka prince sarakh thevav tuzya sagdya wish purn krav tula je pahije de dyach ....pn mazya kadun khup kahi hotch nhi bhava 😏mi khup try krte pn kahi na kahi hounch jate ',
    imageFirst: true
  },
  {
    id: 8,
    image: img11,
    title: 'Don`t Worry',
    text: 'Tension nko ghet jau bhava mi jari kuth sobat nasali tri tuzya soabt bappa🥰 aahe maze krishna❤️ aahe \n Bhava krishna je pn krtat te chaglya sathi krt astat tr mg tension nhi ghyach aani tyani je dil tya sathi thanks mhanach aani pudh chalach \n aani nehami fkt Happy Happy Happy Happy rahach',
    imageFirst: false 
  },
  {
    id: 9,
    image: img13,
    title: 'Rakhi',
    text: 'Bhava tu protect krt nehami mhanun mi Bindhaast rahate\n ha vichar krun ki tu mazya पाठीशी aahe tr mg jr mi kahi mistake krt asel tr ragvat nko jat jau na🥺 mala khup rad yete re baa tu ragavla tr ...shantet samjun sangt jan na \n\n\nभिऊ नको मी तुझ्या पाठीशी आहे!!!🥰',
    imageFirst: true
  },
  {
    id: 10,
    image: img15,
    title: 'Success',
    text: 'Bhava aapn ek disav succefull honarch aaplya life madhe...\nYou just Believe in yourself & Krishna, and remember that the Gita teaches us to act selflessly, without attachment to the outcome. Do your best, and trust that success will come in its own time.🥰',
    imageFirst: false
  },
  {
    id: 11,
    image: imgg2,
    title: 'Love You So Much bhava',
    text: 'Bhava mala tu khup aavdte looooooooove yooooooooooou 😘...pn mi tula Gift tr nhi deu sakt job lage parent...tula he Gift aavdtla ka sangjo ha ',
    imageFirst: true
  },
 
];

function ThirdPage() {
  return (
    <>
      {cardData.map((card) => (
        <div key={card.id} className={`card mb-3 ${thirdPageCss.cardContainer}`}>
          <div className="row g-0">
            {card.imageFirst ? (
              // Render layout with image first
              <>
                <div className="col-md-4">
                  <img src={card.image} className="img-fluid rounded-start" alt={card.title}  style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className={`card-title ${thirdPageCss.title}`}>{card.title}</h1>
                    <p className={`card-text ${thirdPageCss.p}`}>
                      {card.text.split('\n').map((line, index) => (
                        <span key={index}>{line}<br /></span>
                      ))}</p>
                  </div>
                </div>
              </>
            ) : (
              // Render layout with text first
              <>
                <div className="col-md-6">
                  <div className="card-body">
                    <h1 className={`card-title ${thirdPageCss.title}`}>{card.title}</h1>
                    <p className={`card-text ${thirdPageCss.p1}`}>
                      {card.text.split('\n').map((line, index) => (
                        <span key={index}>{line}<br /></span>
                      ))}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={card.image} className="img-fluid rounded-start" alt={card.title}  style={{ width: '100%', height: '400px', objectFit: 'cover' }}  />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default ThirdPage;
