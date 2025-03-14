// Script to list all available voices in echogarden
import { listVoices } from 'echogarden';

async function main() {
  try {
    console.log('Listing all available voices in echogarden:');
    const voices = await listVoices();
    
    console.log('\nAvailable voices:');
    voices.forEach((voice, index) => {
      console.log(`${index + 1}. ${voice.id} - ${voice.name} (${voice.language})`);
    });
    
    console.log('\nTotal voices:', voices.length);
  } catch (error) {
    console.error('Error listing voices:', error);
  }
}

main(); 