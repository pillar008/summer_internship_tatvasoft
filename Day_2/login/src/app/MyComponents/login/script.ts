document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form') as HTMLFormElement;
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = (document.getElementById('username') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
  
      console.log('Username:', username);
      console.log('Password:', password);
  
      // Add your login logic here, for now we just show an alert
      alert(`Logged in as ${username}`);
    });
  });
  