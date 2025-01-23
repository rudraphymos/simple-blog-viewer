
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  console.log(user)

  if (!user) {
    redirect('login');
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to your profile, {user.given_name}!</h1>
      <p>Here you can manage your account information.</p>
    </div>
  );
}

export default ProfilePage;