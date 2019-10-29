import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PlanItem from "../components/PlanItem"


const Data = [
    {id:0 , title:'Day 1: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:1 , title:'Day 2: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:2 , title:'Day 3: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:3 , title:'Day 4: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:4 , title:'Day 5: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:5 , title:'Day 1: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:6 , title:'Day 1: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:7 , title:'Day 1: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:8 , title:'Day 1: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:9 , title:'Day 1: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
{id:10 , title:'Day 1: Hunza janggaaa', discription:"We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters."
},
];


export default class PlanCard extends Component {
    render() {

        RenderPlan = (array)=>{
            return array.map((item,index)=> <PlanItem id={item.id} lastitem={(array.length-1) ===index? true : false} details={item.discription} title={item.title}></PlanItem>)
        }
    
        return (
            <View>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Plan</Text>
              {RenderPlan(Data)}
            </View>
        )
    }
}
