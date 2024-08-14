import LoginForm from '@/Components/LoginForm';

const Login = () => {
  // const router = useRouter();
  // const user = useUser();

  // useEffect(() => {
  //   if (user) {
  //     router.replace('/dashboard');
  //   }
  // }, [user, router]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
