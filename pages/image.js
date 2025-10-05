import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <Image 
        src="/images/profile.jpg" 
        alt="My profile" 
        width={200} 
        height={200} 
      />
    </div>
  );
}
