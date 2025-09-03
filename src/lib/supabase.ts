import { createClient } from '@supabase/supabase-js'

// These would be your actual Supabase URL and anon key
// For demo purposes, using placeholder values
const supabaseUrl = 'https://xhkaakpvfegbhxdxaieu.supabase.co'
const supabaseKey = 'process.env.SUPABASE_KEY'

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
