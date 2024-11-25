package stoway;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Userr, Long> {
    // Additional query methods (if needed)
}
