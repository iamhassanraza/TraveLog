import React, {Component} from 'react';
import {Text, View, StatusBar, FlatList} from 'react-native';
import {ThemeColor} from '../assets/Colors/Colors';

export default class TermsConditions extends Component {
  state = {
    terms: [
    //     {id:1,
    //     title:"GAGG",
    // description:"ASDA ASDAS AS"}
      {
  id: 1,
  title: 'ABOUT US AND HOW TO CONTACT US ',
  descriptions: `Trip.com is a website and mobile application (“Website”) operated by Trip.com Travel Singapore Pte. Ltd., a limited liability company with its address at 72 Anson Road，#12-01，Anson House, Singapore (079911) (”we”, “our” or “us”). We are a global online travel agency (Singapore travel license no. 02943).To contact us, please email or telephone our customer service team (for our email address and helpline number, please see https://www.trip.com/help). You can also use the service chat on our Website.`,
      },
      {
  id: 2,
  title: 'ABOUT THESE TERMS',
  descriptions: `Our Website assists you in gathering travel information and determining the availability of travel products and services. It also allows you to book flight tickets, hotels, train tickets, car rentals, airport transfers and attraction tickets (“Travel Products”) provided by third party suppliers (“Suppliers”). Depending on what country you are booking in, Travel Products may also include ferry and bus tickets, tours, cruises and trips. We also provide customer support services for bookings made on our Website. These terms apply to these booking services.
When you book a Travel Product, your booking is also subject to the relevant Supplier’s terms and conditions (for e.g., the airline’s or the hotel’s terms and conditions). It is important that you read these, as they form a separate legal agreement between you and the relevant Supplier. There is more information on this in each of the Travel Product sections below. If there are any inconsistencies between the Supplier’s term and conditions and these terms, these terms apply. Different terms and conditions (such as cancellation and change rights) apply to different Travel Products, these will be made available to you during your booking process and form part of these terms. You should read them carefully before booking. These terms also tell you the rules for using our Website, including the content standards that apply when you upload content to our Website, link to our Website or interact with our Website in any other way.   
By using our Website and/or completing a booking with us, you confirm that you accept these terms and any relevant Supplier’s terms and conditions, and that you agree to comply with them. We recommend that you read these terms carefully (in particular section 10 on liability) and print a copy for future reference. If there is anything within these terms that you do not understand, please contact us using the details in section 1. If you do not agree to these terms, you must not use our Website or complete a booking with us. You warrant that you have capacity to enter into a legally binding contract (including being at least the required age to have capacity in your country) and that you will only use our Website to make legitimate reservations.
If you are booking Travel Products for a number of individuals, the first name you provide will be responsible for (i) providing accurate information on the other individuals, (ii) accepting these terms on their behalf and ensuring that they comply with them, (iii) checking the details in the booking confirmation and contacting us immediately if any of the details are incorrect, and (iv) paying the full price of the booking and any additional charges in relation to the booking.
We may amend these terms from time to time. We will note the date that amendments were last made at the top of these terms, and any amendments will take effect upon posting. Every time you wish to use our Website and/or completing a booking with us, please check these terms to ensure you understand the terms that apply at that time. 
References to this Website are deemed to include derivatives, including but not limited to linked websites and applications, whether accessed by mobile phone, tablet or other device.  `,
      },
      {
  id: 3,
  title: 'RULES WHEN USING OUR WEBSITE',
  descriptions: `WE MAY MAKE CHANGES TO OUR APPLICATION. We may update and change our App from time to time to reflect changes to our services, our users’ needs and our business priorities. We will try to give you reasonable notice of any major changes.

WE MAY SUSPEND OR WITHDRAW OUR WEBSITE  

Our Website is made available free of charge.

 

We do not guarantee that our Website, or any content on it, will always be available or be uninterrupted. We may suspend, withdraw, or restrict the availability of all or any part of our Website for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal.
     
The provision of our Website is reliant on the internet and devices. You fully understand and agree that we will not be liable for any losses suffered by you as a result of our Website not being available due to events, circumstances or causes beyond our reasonable control, including but not limited to internet, system or device instability, computer viruses and hacker attacks.
     
You are responsible for providing the necessary equipment (including but not limited to an appropriate device and internet connection) and ensuring that all persons who access our Website through your internet connection are aware of these terms and other applicable terms and conditions, and that they comply with them.

 
YOUR ACCOUNT DETAILS

You warrant that all account information supplied by you is true, accurate, current and complete.

If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party. You fully understand and agree that we will not be liable for any losses suffered by you as a result of you failing to treat such information as confidential.

We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of these terms.

If you know or suspect that anyone other than you knows your user identification code or password, you must promptly notify us using the contact details in section 1 of these terms. In this situation, if you have saved your payment details to your account, you will also contact your payment account provider in order to reduce any losses that may occur.  

HOW YOU MAY USE MATERIAL ON OUR WEBSITE  

We are the owner or the licensee of all patents, copyright, trade marks, business names and domain names, rights in designs, rights in computer software, database rights and all other intellectual property rights, in each case whether registered or unregistered, in our Website. All such rights are reserved.

You may print off copies, and may download extracts, of any page(s) from our Website for your personal use and you may draw the attention of others to content posted on our Website.

You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.

Our status (and that of any identified contributors) as the authors of content on our Website must always be acknowledged.

You must not use any part of the content on our Website for commercial purposes without obtaining a licence to do so from us or our licensors.

If you print off, copy or download any part of our Website in breach of these terms, your right to use our Website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.

WE ARE NOT RESPONSIBLE FOR WEBSITES WE LINK TO  

Where our Website contains links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.

We have no control over the contents of those sites or resources.

USER-GENERATED CONTENT IS NOT APPROVED BY US  

This Website may include information and materials uploaded by other users of the Website, including discussion forums, bulletin boards and review services. This information and these materials have not been verified or approved by us. The views expressed by other users on our Website do not represent our views or values. We expressly exclude our liability for any loss or damage arising from the use of any interactive area by a user in contravention of our content standards below.

If you wish to complain about information and materials uploaded by other users please contact us using the details in section 1 of these terms.

 `,
      },
      {
  id: 4,
  title: 'PROHIBITED USES',
  descriptions: `You may only use our Website for lawful purposes. You may not use our Website:

• In any way that breaches any applicable local, national or international law or regulation.

• In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.

• For the purpose of harming or attempting to harm minors in any way.

• To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards below.

• To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).

• To knowingly transmit any data, send or upload any material that contains viruses, trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.

You also agree:

• Not to reproduce, duplicate, copy or re-sell any part of our Website in contravention with these terms.

• Not to access without authority, interfere with, damage or disrupt:

Ø any part of our Website;

Ø any equipment or network on which our Website is stored;

Ø any software used in the provision of our Website; or

Ø any equipment or network or software owned or used by any third party.

• Not interfere or attempt to interfere with the normal operation of our Website or any activity that is conducted on our Website.

• Not to take any action that would result in an unreasonably large data load on our Website’s network.`,
      },
    ],
  };

  render() {
    return (
      <View>
  <StatusBar
    animated={true}
    backgroundColor={ThemeColor}
    barStyle="light-content"
  />
  <View style={{backgroundColor: ThemeColor, height: 40}}>
    <Text
style={{
  alignSelf: 'center',
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold',
  marginTop: 5,
}}>
{' '}
Terms Condition{' '}
    </Text>
  </View>

  <FlatList
    vertical
    style={{paddingBottom:'20%'}}
    data={this.state.terms}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => (
     <View style={{marginHorizontal:'2%',paddingBottom:'2%'}}>
   
    <Text style={{fontSize:20,fontWeight:'bold'}}>{item.id}) {item.title}</Text>
    <Text style={{textAlign:'justify'}}>{item.descriptions}</Text>
   </View>
 
    )}
  />
      </View>
    );
  }
}
