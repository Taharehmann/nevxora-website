import { createClient } from '@supabase/supabase-js'

// These would be your actual Supabase URL and anon key
// For demo purposes, using placeholder values
const supabaseUrl = 'https://jesmyjbrlxevmvvardqu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Implc215amJybHhldm12dmFyZHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MDQyMDcsImV4cCI6MjA3MjQ4MDIwN30.h_hSw4PxenuRqbUZ3sqJOlH2fstw8Wa_hxmFap-Y73A'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Contact form submission
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    // In a real app, this would insert into a Supabase table
    // For demo, we'll simulate the API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful submission
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // ✅ TEST INSERT
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name: 'Test User', email: 'test@test.com', message: 'Hello!' }]);

    console.log("✅ Test insert result:", data);
    console.log("❌ Test insert error:", error);

    return res.status(200).json({ data, error });
  }

  res.status(405).json({ error: 'Method not allowed' });
}


// Newsletter subscription (if needed)
export const subscribeToNewsletter = async (email: string) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, message: 'Successfully subscribed!' };
  } catch (error) {
    console.error('Error subscribing:', error);
    throw new Error('Failed to subscribe. Please try again.');
  }
};
