import WritePage from "../../write/page";

interface EditPageProps {
  params: Promise<{id: string}> | {id: string};
}

export default async function EditPage({params}: EditPageProps) {
  const resolvedParams = await params;
  const articleId = Number(resolvedParams.id);

  return(
    <WritePage articleId={articleId} />
  )
}