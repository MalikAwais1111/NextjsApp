import React from 'react';

const Docspage = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div>
      {params.slug.length === 2 ? (
        <div>viewing 2 slashes after docs</div>
      ) : params.slug.length === 1 ? (
        <div>Only 1 slash</div>
      ) : (
        <div>viewing main docs page</div>
      )}
    </div>
  );
}

export default Docspage;
