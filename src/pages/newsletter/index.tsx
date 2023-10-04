import { Layout } from 'shared';

const Index = () => {
  return (
    <div>news letter</div>
  )
}
Index.getLayout = (page) => {
  return <Layout>{page}</Layout>;
}

export default Index