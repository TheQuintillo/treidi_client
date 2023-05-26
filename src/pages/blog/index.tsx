import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type User = {
  name: string;
  email: string;
  token: string;
};

export const getServerSideProps: GetServerSideProps<{
  user: User;
}> = async () => {
  const res = await fetch("http://localhost:4000/protected");
  const data = await res.json();
  const user = data.results;
  return { props: { user } };
};

export default function Page({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div key={user.email}>{user.email}</div>
    </div>
  );
}
