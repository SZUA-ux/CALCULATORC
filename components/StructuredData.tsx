interface StructuredDataProps {
  data: Record<string, any>[] | Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </>
  );
}
