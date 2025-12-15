package proyecto.inventarios.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import proyecto.inventarios.modelo.Producto;

public interface ProductoRepositorio extends JpaRepository<Producto, Integer> {


}
