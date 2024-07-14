'use server';
// use server: 백엔드 전용코드를 넣을때
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

// process.env : .env또는 .env.local파일에서 값을 일기
// 깃허브 등록안된느 파일이기 때문에 베포시 베포사이트에 직접입력
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    if(req.method === 'POST'){
        const {prompt} = req.body;
        try{
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages:[
                    {role: 'system', content: 'HTML 태그를 제외한 내용을 한글로 적어주세요'},
                    {role: 'user', content:prompt}
                ],
                max_tokens:500,
            });
            console.log(response);
            console.log(response.choices[0].message);

            const answer = response.choices[0].message.content;
            res.status(200).json({answer});
        }catch(error){
            console.error('gpt 관련 오류: ' + error);
            return res.status(404).json({error:'Failed'})
        }
    }
}