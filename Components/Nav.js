/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  console.log(user);

  return (
    <nav className='flex justify-between items-centre py-10'>
      <Link href='/'>
        <button className='text-lg font-medium'>Creative Thougths</button>
      </Link>
      <ul className='flex items-centre gap-10'>
        {!user && (
          <Link
            className='py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8'
            href={"/auth/login"}
          >
            Join Now
          </Link>
        )}
        {user && (
          <div className='flex item-centre gap-6'>
            <Link href='/post'>
              <button className='font-medium bg-cyan-500 text-white py-2 px-4 roounded-mg textx-sm'>
                Post
              </button>
            </Link>
            <Link href='/dashboard'>
              <img
                className='w-10 rounded-full cursor-pointer'
                src={user.photoURL}
                alt='user photo'
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
