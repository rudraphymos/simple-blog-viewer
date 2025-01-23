import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-center text-primary mb-6">
          Welcome, {user.given_name}!
        </h1>
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center text-6xl text-gray-500">
            {user.given_name[0].toUpperCase()}
          </div>
          <p className="text-lg text-gray-700">Here you can view your profile details.</p>
        </div>
        <div className="space-y-4 text-gray-600">
          <p className="font-semibold">
            <span className="text-gray-800">Full Name:</span> {user.given_name} {user.family_name}
          </p>
          <p className="font-semibold">
            <span className="text-gray-800">Email:</span> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;