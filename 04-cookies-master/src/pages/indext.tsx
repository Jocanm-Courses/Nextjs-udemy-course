import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

// Pagina de prueba

export default function indextPage({ pageComponentProps }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>

        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return {
        props: {
            pageComponentProps: "",
            hola:""
        }
    }
}