interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function NotesLayoutPage({ children, modal }: Props) {
  return (
    <section>
      {children}
      {modal}
    </section>
  );
}
