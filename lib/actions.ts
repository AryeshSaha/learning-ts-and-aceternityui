// app/actions/subscribeAction.ts
'use server';

const brevo = require('@getbrevo/brevo');

// Initialize the ContactsApi
const apiInstance = new brevo.ContactsApi();
apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.PRIVATE_BREVO_API_KEY);

export async function subscribeUser(email: string) {
  if (!email) {
    return { success: false, error: 'Email is required' };
  }

  const createContact = {
    email,
    listIds: [2], // Replace with your list ID(s)
  };

  try {
    console.log('Creating contact with Brevo:', createContact);
    const data = await apiInstance.createContact(createContact);
    // Log only essential parts of the response to avoid circular references
    console.log('Contact created successfully:', {
      statusCode: data.response.statusCode,
      body: data,
    });
    return { success: true };
  } catch (error) {
    console.error('Error creating contact:', error);
    return { success: false, error: 'Failed to create contact' };
  }
}
