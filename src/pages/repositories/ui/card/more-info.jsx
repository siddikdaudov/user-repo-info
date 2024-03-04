export const MoreInfo = ({ createdAt, description }) => {
  return (
    <>
      <p>
        <b>Создан:</b> {new Date(createdAt).toLocaleDateString()}
      </p>
      <p>
        <b>Описание:</b> {description}
      </p>
    </>
  );
};
