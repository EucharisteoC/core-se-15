<?php
    class Customer{
        private string $name;
        private string $email;

        public function __construct(string $name, string $email){
            $this->name = trim($name);
            $this->email = trim($email);
        }

        public function getName(){
            return $this->name;
        }

        public function getEmail(){
            return $this->email;
        }

        private array $additionalData = [];

        public function setAdditionalData(array $data): void
        {
            $this->additionalData = $data;
        }

        public function getAdditionalData(): array
        {
            return $this->additionalData;
        }

    }

?>