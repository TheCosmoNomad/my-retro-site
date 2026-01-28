function Content() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h3 style={{ color: 'red' }}>My Interests</h3>
      <p>I love coding, pizza, and watching sci-fi movies.</p>
      
      <table border={1} cellPadding={5} style={{ width: '100%', borderColor: 'gray', background: 'white' }}>
        <thead>
          <tr style={{ background: 'navy', color: 'white' }}>
            <th>Favorite Thing</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML</td>
            <td>It's easy!</td>
          </tr>
          <tr>
            <td>Video Games</td>
            <td>Fun!</td>
          </tr>
          <tr>
            <td>Music</td>
            <td>Loud!</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Content;
