/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
export default function Message({ children, avatar, username, description }) {
  return (
    <div className='bg-white p-8 border-b-2 rounded-lg font-normal'>
      <div className='flex items-centre gap-2'>
        <img className='w-10 rounded-full' src={avatar} />
        <h2>{username}</h2>
      </div>
      <div className='py-4'>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
