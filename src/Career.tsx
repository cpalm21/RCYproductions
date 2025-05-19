import {useState} from "react";
import {Button} from "react-bootstrap"
import axios from 'axios';
import './Career.css';

interface ChatPromptProps {
    chatPrompt: string;
    tokens: number
}

export function CareerResults({chatPrompt, tokens}: ChatPromptProps): React.JSX.Element {

    interface Career{
        title: string;
        salary: number;
        summary: string;
        match:number;
    }

    const [careerRecommendations, setCareerRecommendations] = useState<Career[]>([]);
    const [loadingRecommendation, setLoadingRecommendation] = useState<boolean>(false);
    const getCareerRecommendation = async () => {
        setLoadingRecommendation(true);
        setCareerRecommendations([]);

        try {
        const apiKey = JSON.parse(localStorage.getItem("MYKEY") || '""');
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful career advisor.' },
                { role: 'user', content: chatPrompt }
            ],
            max_tokens: tokens
            },
            {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
            }
        );

        let raw = response.data.choices[0].message.content.trim();
        if (raw.startsWith("```json")) raw = raw.replace(/^```json/, '').replace(/```$/, '').trim();
        else if (raw.startsWith("```")) raw = raw.replace(/^```/, '').replace(/```$/, '').trim();

        try {
            const parsed = JSON.parse(raw);
            setCareerRecommendations(parsed);
        } catch {
            console.error("Failed to parse response JSON.");
        }
        } catch (error) {
            console.error('Failed to fetch recommendation:', error);
        } finally {
            setLoadingRecommendation(false);
        }
    };


    return (
        <div style={{ marginTop: '1rem' }}>
            <Button onClick={getCareerRecommendation} disabled={loadingRecommendation}>
                {loadingRecommendation ? 'Generating...' : 'Get Career Recommendation'}
            </Button>
            {careerRecommendations.length > 0 && (
                <div className="career-wrapper">
                    <p className="career-title">Your Suggested Careers:</p>
                    {careerRecommendations.map((career, index) => (
                        <div className="career-card" key={index}>
                            <h3>💼 {career.title}</h3>
                            <p><strong>💰 Salary:</strong> {career.salary}</p>
                            <p><strong>🎯 Match:</strong> {career.match}</p>
                            <p>{career.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}